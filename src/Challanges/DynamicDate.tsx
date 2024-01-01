const DynamicDate = () => {
  return <p>Today is {getTodaysDate()}</p>;
};

// helper function demo
function getTodaysDate() {
  return new Date().toLocaleDateString();
}
export default DynamicDate;
