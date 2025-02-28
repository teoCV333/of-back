/*
  Warnings:

  - A unique constraint covering the columns `[cNumber]` on the table `PaymentMethod` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethod_cNumber_key" ON "PaymentMethod"("cNumber");
