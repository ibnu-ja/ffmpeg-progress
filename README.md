# ffmpeg-progress
Read the progress of ffmpeg transcoding in real time and serve it as an API.

## Installation
1. Clone the repository

```bash
git clone https://github.com/ibnu-ja/ffmpeg-progress.git
```
2. Install the dependencies

```bash
npm install
```

3. Copy the `.env.example` file to `.env` and fill the variables

```bash
cp .env.example .env
```

4. Run the server

```bash
node index.js
```

## Routes
### GET /api/ffmpeg/progress
Get the progress of the transcoding process.

### GET /api/ffmpeg/fileinfo
Get the file information of the transcoding process.



