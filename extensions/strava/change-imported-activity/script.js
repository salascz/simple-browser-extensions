javascript:(function()
{
  const activity = "Walk";
  const title = "Imported from Endomondo";

  const activityElements = document.querySelectorAll('li[data-value=' + activity +'] a');
  if (!activityElements || activityElements.length === 0) {
    alert('No ' + activity + ' found');
    return;
  }
  for (let i = 0; i < activityElements.length; i++)
  {
      activityElements[i].click()
  }

  const titleElements = document.querySelectorAll('input[name="name"]');
  if (!titleElements || titleElements.length === 0) {
    alert('No title text box found');
    return;
  }
  for (let i = 0; i < titleElements.length; i++)
  {
    titleElements[i].value = title;
  }
}
)();
