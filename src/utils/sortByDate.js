export const sortByDate = (notes, sortBy) => {
  switch (sortBy) {
    case "newest":
      return [...notes].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "oldest":
      return [...notes].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    default:
      return notes;
  }
};
