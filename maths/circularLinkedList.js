function circularLL(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}