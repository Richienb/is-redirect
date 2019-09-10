import test from 'ava';
import isRedirect from '.';

test('main', t => {
	t.true(isRedirect(305));
	t.false(isRedirect(405));
});
