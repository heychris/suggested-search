test('should return names data', () => {
  const { requestData } = require('../requestData');
  const onResponse = jest.fn();
  const onError = jest.fn();

  fetch.mockResponseOnce(JSON.stringify({ id: 1 }));

  return requestData('./data/names.json')
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();

      expect(onResponse.mock.calls[0][0]).toEqual({ id: 1 });
    });
});
