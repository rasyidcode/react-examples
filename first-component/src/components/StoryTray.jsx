/* eslint-disable react/prop-types */
export default function StoryTray({ stories }) {
  const storiesWidget = stories.map((story) => (
    <li key={story.id}>{story.label}</li>
  ));
  storiesWidget.push(<li key="create">Create Story</li>);
  return <ul>{storiesWidget}</ul>;
}
