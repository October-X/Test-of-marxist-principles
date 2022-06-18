async function getTitles() {
  const resp = await fetch("http://47.101.182.207:9091/test");
  const result = await resp.json();
  return result.data;
}
async function getDetails(id) {
  const resp = await fetch(`http://47.101.182.207:9091/test/subjects?testId=${id}`);
  const result = await resp.json();
  return result.data;
}