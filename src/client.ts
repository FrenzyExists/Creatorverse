import { createClient } from "@supabase/supabase-js";

const URL: string = 'https://rktzhaezpzysaropjiqw.supabase.co';
const API_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdHpoYWV6cHp5c2Fyb3BqaXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4NjgyMDYsImV4cCI6MjAzOTQ0NDIwNn0.pdQ_sFOUOBFqyikPWAee4EV3K7wGc7DU85sCBZPGefA'
export const supabase = createClient(URL, API_KEY);