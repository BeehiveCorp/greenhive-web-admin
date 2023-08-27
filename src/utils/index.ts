export function getInitials(name: string): string {
  const trimmedName: string = name.trim();
  const namesArray: string[] = trimmedName.split(' ');

  if (namesArray.length === 1) {
    return trimmedName.slice(0, 2).toUpperCase();
  }

  return namesArray
    .map((n) => n.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
}
