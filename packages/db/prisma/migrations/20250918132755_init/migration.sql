-- CreateEnum
CREATE TYPE "public"."WebsiteStatus" AS ENUM ('Good', 'Bad');

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Website" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Uptime" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uptime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Uptime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Validator" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "Validator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WebsiteTickTable" (
    "id" TEXT NOT NULL,
    "WebsiteId" TEXT NOT NULL,
    "ValidatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "status" "public"."WebsiteStatus" NOT NULL,
    "latency" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WebsiteTickTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Uptime_userId_key" ON "public"."Uptime"("userId");

-- AddForeignKey
ALTER TABLE "public"."Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebsiteTickTable" ADD CONSTRAINT "WebsiteTickTable_WebsiteId_fkey" FOREIGN KEY ("WebsiteId") REFERENCES "public"."Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebsiteTickTable" ADD CONSTRAINT "WebsiteTickTable_ValidatorId_fkey" FOREIGN KEY ("ValidatorId") REFERENCES "public"."Validator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
