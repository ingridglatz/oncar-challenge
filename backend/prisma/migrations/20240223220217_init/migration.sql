-- CreateEnum
CREATE TYPE "Features" AS ENUM ('Airbags', 'PowerWindows', 'AirConditioning', 'AutomaticTransmission', 'ManualTransmission');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "features" "Features"[],
    "image" TEXT,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
