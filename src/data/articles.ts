export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'article' | 'mini-nugget';
  publishDate: string;
  readTime: string;
  featured?: boolean;
  heroImage?: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'chocolate',
    title: 'Chocolate: The Real Story Behind Your Favorite Treat',
    excerpt: 'Let\'s cut through the marketing hype and look at what chocolate actually does for your body. From cocoa percentages to processing methods, here\'s what you need to know when choosing chocolate at the supermarket.',
    category: 'article',
    publishDate: '2024-12-15',
    readTime: '8 min read',
    featured: true,
    heroImage: '/chocolate.jpg',
    content: `# Chocolate: The Real Story Behind Your Favorite Treat

Walk down any supermarket aisle and you'll see chocolate marketed as everything from a superfood to a guilt-inducing treat. The reality? It's neither. Let's look at what chocolate actually does for your body, based on the evidence we have.

## What's Actually in Chocolate?

Chocolate starts with cacao beans, which contain several compounds that affect your health:

- **Flavonoids**: Plant compounds with antioxidant properties
- **Caffeine**: A mild stimulant (much less than coffee)
- **Theobromine**: A compound similar to caffeine, but gentler
- **Fat**: Primarily cocoa butter, a saturated fat that's neutral for heart health
- **Sugar**: Added during processing (varies widely by product)

## The Cocoa Percentage Game

You've probably noticed percentages on dark chocolate bars. Here's what they mean:

- **70%+ cocoa**: Higher flavonoid content, less sugar, more intense flavor
- **50-70% cocoa**: Moderate flavonoids, balanced sweetness
- **Below 50%**: Lower flavonoid content, more sugar and milk

Higher percentages aren't automatically "healthier." It depends on what you're looking for and what you enjoy eating.

## What the Research Actually Shows

**Cardiovascular health**: Some studies suggest regular consumption of dark chocolate (70%+ cocoa) may have modest benefits for blood pressure and heart health. The key word is "modest" – we're talking small effects, not miracle cures.

**Brain function**: Limited evidence suggests cocoa flavonoids might support cognitive function, but the research is still early-stage.

**Mood**: Many people report feeling better after eating chocolate. This could be psychological, physiological, or both. All are valid reasons to enjoy food.

## Practical Supermarket Advice

When choosing chocolate:

1. **Read the ingredient list**: Cocoa/cacao should be first for dark chocolate
2. **Check added sugars**: Some "health" chocolates are surprisingly high in sugar
3. **Consider your goals**: Want antioxidants? Choose higher cocoa percentages. Want pure enjoyment? Choose what tastes good to you
4. **Portion awareness**: A standard serving is about 20-30g (4-6 squares)

## The Bottom Line

Chocolate isn't health food, but it's not poison either. If you enjoy it, include it in your diet without guilt. The healthiest approach to any food is one that considers both nutrition and pleasure.

Dark chocolate with higher cocoa content offers more potential health compounds, but milk chocolate isn't "bad" if that's what you prefer. The best chocolate is the one you savor mindfully, rather than eating quickly out of habit or stress.

**Key takeaway**: Choose chocolate you actually enjoy, eat it mindfully, and don't let marketing claims drive your decisions. Your body – and your taste buds – will thank you.`
  },
  {
    id: '2',
    slug: 'lecithin',
    title: 'Mini Nugget: What is Lecithin?',
    excerpt: 'See this ingredient on food labels? Here\'s what lecithin actually does and why food manufacturers use it.',
    category: 'mini-nugget',
    publishDate: '2024-12-10',
    readTime: '3 min read',
    heroImage: '/leitchin.jpg',
    content: `# Mini Nugget: What is Lecithin?

If you read ingredient lists (and you should), you've probably seen "lecithin" or "soy lecithin" on everything from chocolate to bread. Here's the straight story.

## What It Is

Lecithin is a natural substance found in egg yolks, soybeans, and sunflower seeds. It's what's called an emulsifier – it helps oil and water mix together when they normally wouldn't.

## Why It's in Your Food

Food manufacturers use lecithin because it:

Keeps things smooth: Prevents chocolate from separating
Improves texture: Makes baked goods more tender
Extends shelf life: Helps prevent staleness
Reduces ingredients needed: Less butter or oil required in some products

## Is It Safe?

Yes. Lecithin has been used in food for decades and is generally recognized as safe. Most people consume it without any issues.

**One note**: If you have a severe soy allergy, soy lecithin might be a concern, though most allergists consider it safe because it contains very little soy protein.

## The Bottom Line

Lecithin is a functional ingredient that serves a real purpose in food manufacturing. It's not harmful, and it's not something you need to avoid unless you have specific allergies.

When you see it on labels, think of it as the ingredient that keeps your chocolate bar smooth and your bread soft. Nothing more mysterious than that.`
  },
  {
    id: '3',
    slug: 'granola',
    title: 'Mini Nugget: Is Granola Actually Healthy?',
    excerpt: 'Granola has a health halo, but is it deserved? A quick look at what\'s really in your morning bowl.',
    category: 'mini-nugget',
    publishDate: '2024-12-08',
    readTime: '4 min read',
    heroImage: '/granola.jpg',
    content: `# Mini Nugget: Is Granola Actually Healthy?

Granola sits in the health food aisle looking virtuous, but let's check the facts.

## What's Typically in Granola

- **Oats**: Whole grain, good source of fiber
- **Nuts/seeds**: Healthy fats, protein, vitamins
- **Honey or maple syrup**: Added sugars (though "natural")
- **Oil**: Usually a neutral oil for toasting
- **Dried fruit**: More concentrated sugars
- **Salt**: For flavor enhancement

## The Reality Check

**The good**: Granola does contain whole grains, healthy fats, and some protein. It's more nutritious than many breakfast cereals.

**The catch**: It's also calorie-dense. A typical serving (1/4 cup) contains 140-200 calories, and most people eat more than the suggested serving size.

**The sugar factor**: Many commercial granolas contain 6-12g of added sugar per serving – similar to some cereals marketed to children.

## Supermarket Strategy

**Read labels carefully**:
- Look for granolas with less than 8g sugar per serving
- Check that oats are the first ingredient
- Avoid products with more than 5-6 ingredients

**Portion awareness**: Use measuring cups initially to understand what a serving looks like. Most people overestimate by 2-3 times.

**DIY option**: Making granola at home lets you control sugar and oil content.

## The Bottom Line

Granola isn't a superfood, but it's not junk food either. It's a processed food that can fit into a healthy diet when eaten in appropriate portions.

Treat it like what it is: a tasty mixture of healthy ingredients held together with sweeteners and oils. Enjoy it, but don't expect it to single-handedly improve your health.`
  }
];