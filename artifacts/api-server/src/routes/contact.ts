import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import {
  SubmitContactBody,
  ListContactsResponse,
  UpdateContactStatusParams,
  UpdateContactStatusBody,
  UpdateContactStatusResponse,
} from "@workspace/api-zod";
import { sendContactNotification } from "../lib/mailer.js";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values(parsed.data)
    .returning();

  sendContactNotification({ ...parsed.data, id: contact.id }).catch(() => {});

  res.status(201).json({ success: true, message: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً.", id: contact.id });
});

router.get("/contact/list", async (_req, res): Promise<void> => {
  const contacts = await db
    .select()
    .from(contactsTable)
    .orderBy(contactsTable.createdAt);

  res.json(ListContactsResponse.parse(contacts));
});

router.patch("/contact/:id/status", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = UpdateContactStatusParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  const body = UpdateContactStatusBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const [updated] = await db
    .update(contactsTable)
    .set({ status: body.data.status })
    .where(eq(contactsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Contact not found" });
    return;
  }

  res.json(UpdateContactStatusResponse.parse(updated));
});

export default router;
