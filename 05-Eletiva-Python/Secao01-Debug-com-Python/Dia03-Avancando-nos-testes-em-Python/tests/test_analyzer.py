from analyzer import analyze_json_file
from unittest.mock import patch, Mock

def test_analyze_json_file():
    mock_read_json_file = Mock(return_value={'nome': 'Alice', 'idade': 25})
    fake_file_path = 'fake.json'

    with patch('analyzer.read_json_file', mock_read_json_file):
        result = analyze_json_file(fake_file_path)
    
    assert result == 'A pessoa de nome Alice tem 25 anos de idade'
    mock_read_json_file.assert_called_once_with(fake_file_path)