function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    
    // 다리 위에 올라간 트럭
    let trOnbr = Array.from({ length: bridge_length }, () => 0);
    let bridgeWeight = 0;

    sec++;
    trOnbr.shift();
    bridgeWeight += truck_weights[0];
    trOnbr.push(truck_weights.shift());

    while(bridgeWeight > 0) {
        sec++;
        bridgeWeight -= trOnbr.shift();

        if(truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
            bridgeWeight += truck_weights[0];
            trOnbr.push(truck_weights.shift());
        } else {
            trOnbr.push(0);
        }
    }
    return sec;
}