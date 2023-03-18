import { createClient } from "@supabase/supabase-js";

const existingApiUrl = "https://aruswkvjfqmwbmdbzrgy.supabase.co/rest/v1/sakurafestival";
const newapiurl = "https://aruswkvjfqmwbmdbzrgy.supabase.co/rest/v1/favorite";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydXN3a3ZqZnFtd2JtZGJ6cmd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODc3NzQ1OCwiZXhwIjoxOTk0MzUzNDU4fQ.h5wDHuVu4r6oxz_-8j86Y-E3AaQ3YTMcZpv40Pos_Ls";
const supabase = createClient("https://aruswkvjfqmwbmdbzrgy.supabase.co", supabaseApiKey);

const likeBtns = document.querySelectorAll(".likebtn");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.dataset.id;
    await fetchAndPushData(id);
  });
});

async function fetchAndPushData(id) {
  try {
    // Fetch data from existing API
    const response = await fetch(`${existingApiUrl}?id=eq.${id}`, {
      headers: {
        apikey: supabaseApiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from API. Status: ${response.status}`);
    }
    const data = await response.json();

    // Push data to new API
    const newData = {
      id: data[0].id,
      created_at: new Date().toISOString(),
      name: data[0].name,
      description: data[0].description,
      place: data[0].place,
      day: data[0].day,
      time: data[0].time,
      slug: data[0].slug,
      event_firm: data[0].event_firm,
      image_path: data[0].image_path,
      type: data[0].type,
      class: data[0].class,
    };

    const { data: insertedData, error } = await supabase.from("favorite").insert([newData]).select();

    if (error) {
      throw new Error(`Failed to push data to new API. Error: ${error.message}`);
    }
    console.log("Data successfully pushed to new API:", insertedData);
  } catch (error) {
    console.error("Error fetching and pushing data:", error);
  }
}
