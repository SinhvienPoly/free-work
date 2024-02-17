import { writeFile } from 'fs/promises';
import { AxiosError } from 'axios';

export const POST = async (req: Request) => {
    try {
        const data = await req.formData();
        const file: File | null = data.get('file') as unknown as File;
        if (!file) {
            return Response.json({ message: 'image not found', success: false });
        }
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);

        const path = `./public/uploads/${file.name}`;

        await writeFile(path, buffer);

        return Response.json({ url: file.name });
    } catch (error) {
        return new Response(JSON.stringify({ message: (error as AxiosError).message }));
    }
};
