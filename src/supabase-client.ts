import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://wogxpmfnfiyvhpxhcgzj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZ3hwbWZuZml5dmhweGhjZ3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjkyMDIsImV4cCI6MjA2Njk0NTIwMn0._m9LFk2JL5xZtsKEoUiR-rhckxEr2_3DB7wsSbQAORA'
);