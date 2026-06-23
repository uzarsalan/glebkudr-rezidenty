import { NextResponse } from "next/server";
import { appendFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, string> | null = null;
  try {
    body = await req.json();
  } catch {
    body = null;
  }
  if (!body || !body.name || !body.contact) {
    return NextResponse.json({ error: "name and contact required" }, { status: 400 });
  }

  const record = {
    ts: new Date().toISOString(),
    name: String(body.name).slice(0, 200),
    contact: String(body.contact).slice(0, 200),
    build: String(body.build || "").slice(0, 2000),
    link: String(body.link || "").slice(0, 500),
  };

  try {
    await appendFile(path.join(process.cwd(), "applications.jsonl"), JSON.stringify(record) + "\n");
  } catch (e) {
    console.error("[apply] write error:", (e as Error).message);
    return NextResponse.json({ error: "storage" }, { status: 500 });
  }

  console.log("[apply] new application from", record.name, record.contact);
  return NextResponse.json({ ok: true });
}
