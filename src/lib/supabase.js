import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gmpeydttvfsxjmwbrsna.supabase.co";

const supabasePublishableKey = "sb_publishable_KW1Kl1MESnjD3l_gq7lCZQ_Ba8Lj_0O";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
