'use server';

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// 노션 페이지 생성 함수
export default async function createNotionPage(
  name: string,
  email: string,
  content: string,
) {
  try {
    const response = await notion.pages.create({
      parent: {
        type: 'database_id',
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Content: {
          rich_text: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    console.error('노션 API 에러:', error);
    throw error;
  }
}
