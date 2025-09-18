/*
  Warnings:

  - You are about to drop the column `Disabled` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Website" DROP COLUMN "Disabled",
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;
