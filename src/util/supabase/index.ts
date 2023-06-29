type User = {
    email?: string;
    phone?: string;
    type?: string;
}

import { createClient } from "@supabase/supabase-js";
import { type } from "os";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

export async function userAlreadyExists( {type, email, phone}: User ) {
    if (type === 'email') {
        const { data } = await supabase.from('users').select('email').eq('email', email)
        if (data && data?.length > 0) {
            return true
        }
    }
    else if (type === 'phone') {
        const { data } = await supabase.from('users').select('phone').eq('phone', phone)
        if (data && data?.length > 0) {
            return true
        }
    }
    return false
}
