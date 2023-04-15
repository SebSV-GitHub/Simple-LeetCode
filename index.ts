function lengthOfLongestSubstring(s: string): number {
	if (s.length == 1) return 1;

	let maxLength = 0;
	let str: string;
	let start = 0;
	let end = 1;

	while (end < s.length) {
		str = s.substring(start, end);

		const duplicatePosition = str.indexOf(s[end]);
		if (duplicatePosition !== -1) {
			start = start + duplicatePosition + 1;
		}
		maxLength = maxLength < end - start + 1 ? end - start + 1 : maxLength;
		end++;
	}
	return maxLength;
}

export default lengthOfLongestSubstring;
