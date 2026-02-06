
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://djffgsowpdxehbblsgbl.supabase.co";
const supabaseAnonKey = "sb_publishable_Lld6DdUvsmRXC99Wq_UGWw_Y8g7F1h3";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
/*
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://djffgsowpdxehbblsgbl.supabase.co',
    'sb_publishable_Lld6DdUvsmRXC99Wq_UGWw_Y8g7F1h3'
    sb_publishable_Lld6DdUvsmRXC99Wq_UGWw_Y8g7F1h3
);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://your-project-ref.supabase.co";
const supabaseAnonKey = "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

*/
// supabase-client.js