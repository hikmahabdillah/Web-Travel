const spanLabel = (props) => {
  const typeTrip = props
  switch (typeTrip) {
    case "cheaptrip":
      return (
        <span className="bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 w-max mb-2">
          Cheap Trip
        </span>
      );
    case "privatetrip":
      return (
        <span className="bg-gray-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 w-max mb-2">
          Private Trip
        </span>
      );
    case "opentrip":
      return (
        <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 w-max mb-2">
          Open Trip
        </span>
      );
    case "longtrip":
      return (
        <span className="bg-yellow-100 text-yellow-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 w-max mb-2">
          Long Trip
        </span>
      );
    default:
      return null;
  }
};

export default spanLabel;