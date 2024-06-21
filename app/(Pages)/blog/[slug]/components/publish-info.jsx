const PublishInfo = ({ post }) => {
  const formatDateString = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      {" "}
      <h5 style={{ padding: "2% 0 0", textAlign: "center" }}>
        {post.author} | Created: {formatDateString(post.createdAt)}
        {post.createdAt !== post.updatedAt &&
          ` | Updated: ${formatDateString(post.updatedAt)}`}
      </h5>
    </div>
  );
};

export default PublishInfo;
