// app/api/tasks/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const { title } = await req.json();
  const task = await prisma.task.create({
    data: { title },
  });
  return NextResponse.json(task, { status: 201 });
}
