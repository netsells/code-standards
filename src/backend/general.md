# General
This section contains general guidelines that should be adhered to despite the technology used by the backend developer.

## Case Conventions
| Item | Convention | Example
| --- | --- | --- |
| JSON Response | `snake_case` | `"first_name": "Geoff",`|
| Database names, tables and columns | `snake_case` | `your_parking_space` |
| URL Parameters | `snake_case` | `/show?include_extra_info=true` |
| GitHub Repositories | `slug-case` | `your-parking-space` |
| Laravel Configuration (Values) | `snake_case` | `config.services.aws.access_key` |
| Laravel Config (Filenames) | `slug-case` | `your-parking-space.php` |
| Laravel Routes (Name) | `slug-case` | `profile.your-account` |
| Laravel Routes (URI) | `slug-case` | `profile/your-account` |