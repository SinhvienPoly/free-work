-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "health" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "avatarId" TEXT,
    "age" TIMESTAMP(3) NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillOnUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "SkillOnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailInformation" (
    "id" TEXT NOT NULL,
    "healthCertificationUrl" TEXT NOT NULL,
    "IDCard" TEXT NOT NULL,
    "temporaryAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "DetailInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IDCard" (
    "id" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "frontOfUrl" TEXT NOT NULL,
    "backSideUrl" TEXT NOT NULL,

    CONSTRAINT "IDCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SkillOnUser" ADD CONSTRAINT "SkillOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillOnUser" ADD CONSTRAINT "SkillOnUser_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
