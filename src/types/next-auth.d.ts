import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

type UserId = string;

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId;
        username?: string | null;
        fullName?: string | null;
        phone?: string | null;
        active: boolean;
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId;
            username?: string | null;
            active: boolean;
            fullName?: string | null;
        };
    }
}
