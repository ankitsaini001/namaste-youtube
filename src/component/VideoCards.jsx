// Converts raw view counts to a compact human-readable form (e.g. 1200000 → "1.2M")
const formatViewCount = (count) => {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
  if (count >= 1000) return (count / 1000).toFixed(1) + "K";
  return count;
};

// Returns a relative label like "3 days ago"; falls through to "Just now" for sub-minute gaps
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];
  for (const { label, seconds: s } of intervals) {
    const count = Math.floor(seconds / s);
    if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""} ago`;
  }
  return "Just now";
};

const VideoCards = ({ video }) => {
    console.log(video);
    
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  return (
    <div className="w-64 m-2">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-sm font-semibold mt-2 line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
      <p className="text-xs text-gray-600">
        {formatViewCount(viewCount)} views • {timeAgo(publishedAt)}
      </p>
    </div>
  );
};

export default VideoCards;