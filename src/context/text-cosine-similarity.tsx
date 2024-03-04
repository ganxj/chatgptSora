


export function CalculateCosineSimilarity(text1: string, text2: string): number {
    // 分词并统计词频
    const wordFrequency1 = calculateWordFrequency(text1);
    const wordFrequency2 = calculateWordFrequency(text2);

    // 转换为词频向量
    const vector1 = Object.values(wordFrequency1);
    const vector2 = Object.values(wordFrequency2);

    // 计算余弦相似度
    return cosineSimilarity(vector1, vector2);
}

function calculateWordFrequency(text: string): { [word: string]: number } {
    // 这里需要根据实际情况进行分词，统计词频的操作
    // 这里只是一个示例，简单统计每个单词的出现次数
    const words = text.split(/\s+/);
    const wordFrequency: { [word: string]: number } = {};
    for (const word of words) {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    }
    return wordFrequency;
}

// 计算两个向量的点积
function dotProduct(vector1: number[], vector2: number[]): number {
    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
        dotProduct += vector1[i] * vector2[i];
    }
    return dotProduct;
}

// 计算向量的模
function vectorMagnitude(vector: number[]): number {
    let magnitude = 0;
    for (let i = 0; i < vector.length; i++) {
        magnitude += Math.pow(vector[i], 2);
    }
    return Math.sqrt(magnitude);
}

// 计算余弦相似度
function cosineSimilarity(vector1: number[], vector2: number[]): number {
    const dot = dotProduct(vector1, vector2);
    const magnitude1 = vectorMagnitude(vector1);
    const magnitude2 = vectorMagnitude(vector2);
    return dot / (magnitude1 * magnitude2);
}


