class Solution {
    public String intToRoman(int num) {
        int[] numbers =  { 1000, 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1};
        String[] strs =  { "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
        
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<numbers.length;i++){
            while(num >= numbers[i]){
                num -= numbers[i];
                sb.append(strs[i]);
            }
        }
    }
}