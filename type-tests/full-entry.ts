import zhiaiwanUtils, {
	add,
	array,
	collection,
	func as funcNamed,
	lang,
	math,
	object,
	string,
} from "@zhiaiwan/utils";
import arrayDefault from "@zhiaiwan/utils/array";
import collectionDefault from "@zhiaiwan/utils/collection";
import func from "@zhiaiwan/utils/func";
import langDefault from "@zhiaiwan/utils/lang";
import mathDefault from "@zhiaiwan/utils/math";
import objectDefault from "@zhiaiwan/utils/object";
import stringDefault from "@zhiaiwan/utils/string";

const addResult: number = add(1, 2);
const chunked: number[][] = array.chunk([1, 2, 3, 4], 2);
const chunkedFromDefaultArray: number[][] = arrayDefault.chunk([1, 2, 3, 4], 2);
const pickedFromObject: { id: number } = object.pick({ id: 1, name: "zw" }, [
	"id",
] as const);
const pickedFromDefaultObject: { name: string } = objectDefault.pick(
	{ id: 1, name: "zw" },
	["name"] as const,
);
const addedFromMath: number = math.add(1, 2);
const addedFromDefaultMath: number = mathDefault.add(2, 3);
const onceWrapped = func.once((value: number) => value + 1);
const onceResult: number = onceWrapped(1);
const onceWrappedFromNamed = funcNamed.once((value: number) => value + 1);
const onceResultFromNamed: number = onceWrappedFromNamed(1);
const mappedFromCollection: number[] = collection.map(
	[{ n: 1 }, { n: 2 }],
	"n",
);
const mappedFromCollectionDefault: number[] = collectionDefault.map(
	[{ n: 1 }, { n: 2 }],
	"n",
);
const camelFromString: string = string.camelCase("foo bar");
const snakeFromStringDefault: string = stringDefault.snakeCase("foo bar");
const nilFromLang: boolean = lang.isNil(null);
const stringFromLangDefault: boolean = langDefault.isString("abc");

const hasPath: boolean = zhiaiwanUtils.has({ a: 1 }, "a");
const tapped: { value: number } = zhiaiwanUtils.tap(
	{ value: 1 },
	(payload: { value: number }) => {
		payload.value += 1;
	},
);

void addResult;
void chunked;
void chunkedFromDefaultArray;
void pickedFromObject;
void pickedFromDefaultObject;
void addedFromMath;
void addedFromDefaultMath;
void onceResult;
void onceResultFromNamed;
void mappedFromCollection;
void mappedFromCollectionDefault;
void camelFromString;
void snakeFromStringDefault;
void nilFromLang;
void stringFromLangDefault;
void hasPath;
void tapped;
