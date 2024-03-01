import pytest
from challenges.challenge_encrypt_message import encrypt_message


def test_encrypt_message():
    with pytest.raises(TypeError):
        encrypt_message(123, 5)
    with pytest.raises(TypeError):
        encrypt_message('teste', 'Teste')

    assert encrypt_message('cruzeiro', 6) == 'or_iezurc'
    assert encrypt_message('cruzeiro', 12) == 'oriezurc'
