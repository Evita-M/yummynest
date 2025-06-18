/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageUrl",
ADD COLUMN     "imageSrc" TEXT,
ADD COLUMN     "reviewRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewTotalCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Review";
