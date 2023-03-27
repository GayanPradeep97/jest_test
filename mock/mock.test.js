const forEach = ( item, callback) => {
    for(let i=0; i < item.length; i++){
        callback(item[i])
    }
}

it('mock callback', () => {
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0,1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2)


});
