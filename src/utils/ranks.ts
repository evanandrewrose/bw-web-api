type Bucket = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Rank = "S" | "A" | "B" | "C" | "D" | "E" | "F";

/**
 * Converts a rank to a bucket (brood war web api refers to ranks as buckets)
 *
 * @param bucket - The bucket to convert to a rank
 * @returns - The rank corresponding to the bucket
 */
export const rankFromBucket = (bucket: Bucket): Rank => {
  switch (bucket) {
    case 7:
      return "S";
    case 6:
      return "A";
    case 5:
      return "B";
    case 4:
      return "C";
    case 3:
      return "D";
    case 2:
      return "E";
    case 1:
      return "F";
  }
};
