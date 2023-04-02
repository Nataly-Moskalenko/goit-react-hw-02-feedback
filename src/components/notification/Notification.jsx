export default function Notification({ message, total }) {
  return <p>{total ? null : message}</p>;
}
