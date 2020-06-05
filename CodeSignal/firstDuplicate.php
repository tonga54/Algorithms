// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the minimal index. 
// In other words, if there are more than 1 duplicated numbers, return the number for 
// which the second occurrence has a smaller index than the second occurrence of 
// the other number does. If there are no such elements, return -1.

function firstDuplicate($a) {
    $aux = [];
    $count = count($a);
    $i = 0;
    $response = -1;
    while($i < $count){
        if(in_array($a[$i], $aux)){
            $response = $a[$i];
            $i = $count;
        }
        else{
            $aux[] = $a[$i];
        }
        
        $i++;
    }
    
    return $response;
}
