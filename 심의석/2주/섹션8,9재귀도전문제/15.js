function reverse(str) {
  if (str.length <= 0) return "";
  else {
    const head = str.slice(0, str.length - 1);
    const tail = str[str.length - 1];
    return `${tail}${reverse(head)}`;
  }
}
console.log(reverse("abcdefg"));
