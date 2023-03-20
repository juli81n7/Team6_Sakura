import { createClient } from "@supabase/supabase-js";

const existingApiUrl = "https://aruswkvjfqmwbmdbzrgy.supabase.co/rest/v1/sakurafestival";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydXN3a3ZqZnFtd2JtZGJ6cmd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODc3NzQ1OCwiZXhwIjoxOTk0MzUzNDU4fQ.h5wDHuVu4r6oxz_-8j86Y-E3AaQ3YTMcZpv40Pos_Ls";
const supabase = createClient("https://aruswkvjfqmwbmdbzrgy.supabase.co", supabaseApiKey);

const likeBtns = document.querySelectorAll(".likebtn");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.dataset.id;
    await updateLikedValue(id);
  });
});

async function updateLikedValue(id) {
  try {
    const { data: existingData, error } = await supabase.from("sakurafestival").select().eq("id", id);

    if (error) {
      throw new Error(`Failed to fetch data from API. Error: ${error.message}`);
    }

    if (existingData.length === 0) {
      throw new Error(`Data with ID ${id} not found in API.`);
    }

    const liked = existingData[0].liked === true ? false : true;

    const { data: updatedData, error: updateError } = await supabase.from("sakurafestival").update({ liked }).eq("id", id);

    if (updateError) {
      throw new Error(`Failed to update data in API. Error: ${updateError.message}`);
    }

    console.log("Data successfully updated in API:", updatedData);
  } catch (error) {
    console.error("Error updating data:", error);
  }
}
