## ✍🏻 제목 : 더 맵게
매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

```섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)```

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

#### 제한사항
- scoville의 길이는 2 이상 1,000,000 이하입니다.
- K는 0 이상 1,000,000,000 이하입니다.
- scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
- 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

|scoville|K|return|
|:------:|:----:|:----:|
|[1, 2, 3, 9, 10, 12]|7|2|

</br>

---

### 🔍 이렇게 접근 했어요 !

```javascript
function solution(scoville, K) {
    let count = 0;
    const heap = scoville.reduce((heap, food) => {
        heap.insert(food);
        return heap;
    }, new MinHeap());

    while (heap.getMin() < K) {
        if (heap.size() < 2) {
            return -1;
        }

        heap.insert(heap.remove() + heap.remove() * 2);
        count += 1;
    }

    return count;
}

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getMin() {
        return this.heap[1];
    }

    size() {
        return this.heap.length - 1;
    }

    insert(node) {
        this.heap.push(node);

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            while (
                current > 1 &&
                this.heap[Math.floor(current / 2)] > this.heap[current]
            ) {
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [
                    this.heap[current],
                    this.heap[Math.floor(current / 2)],
                ];
                current = Math.floor(current / 2);
            }
        }
    }

    remove() {
        let smallest = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])
            ) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [
                        this.heap[leftChildIndex],
                        this.heap[current],
                    ];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [
                        this.heap[rightChildIndex],
                        this.heap[current],
                    ];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1);
        } else {
            return null;
        }

        return smallest;
    }
}
```