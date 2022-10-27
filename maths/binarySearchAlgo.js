var arr = [13,45,34,2,56,3,57,34,88,55];
var key=57;
var low=0;
var high=arr.length-1;
var mid=0;
var flag=0;
arr.sort()

console.log("The sorted array is: "+arr); //13,2,3,34,34,45,55,56,57,88

while(low<=high)
{
  mid=Math.floor((low+high)/2);
  if(key < arr[mid])
  {
    high=mid-1;
  }
  else if(key > arr[mid])
  {
    low=mid+1;
  }
  else if(key == arr[mid])
  {
    flag++;
    console.log("found at index:"+mid); //print the position
    break;
  }
}

if(flag==0)
{
  console.log("Not found"); // Element not present in array
}