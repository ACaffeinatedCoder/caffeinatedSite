/*
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://djffgsowpdxehbblsgbl.supabase.co',
    'sb_publishable_Lld6DdUvsmRXC99Wq_UGWw_Y8g7F1h3'
);
*/
// supabase-client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://djffgsowpdxehbblsgbl.supabase.co";
const supabaseAnonKey = "sb_publishable_Lld6DdUvsmRXC99Wq_UGWw_Y8g7F1h3";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
