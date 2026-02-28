_("  abc  ")
	.chain()
	.trim()
	.thru((value) => [value])
	.value();
// => ['abc']
