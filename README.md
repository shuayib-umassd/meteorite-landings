# Final Report (Data Visualization, CIS 568)
#### Group 2: Shuayib Abdulkadir
#### Date: 3th April, 2024

________________________

## Introduction and Background

In the time intervals with significant number of meteorite incidents, which regions are most affected and what is the mean meteorite mass in them?
The line plot allows the scrutiny of occurrences as the years pass. During its implementation, it was noticed that 288 instances out of the 45,716 contained in the data set lack the year of occurrence. By analysing it, one can see that the number of meteorites significantly increased from 1970 onwards. This does not mean that there were very few meteorites previously, but more likely that such events are observed, registered and studied now more than ever. There are incidents dating as far back as 860 CE, but such old instances are few and far between.

In conjunction with this line plot, the count and average mass choropleth maps allow the inspection of which regions registered the most meteorite landings, and which saw the biggest average mass. These maps were obtained by performing a reverse geocoding of the coordinates originally present in this data set using MapBox's API. It is worth mentioning that this API failed to return the country of 14,962 instances, which is around a third of the data set instances. To visualize all meteorite landings, another map plot with circle marks is available by clicking on Occurrences Map.

In terms of number of occurrences, Antarctica tops the ranking with 20,676 instances. However, as it can be seen on the average mass choropleth, Greenland and Namibia seem to have the biggest average mass by far. Interestingly enough, Greenland and Namibia only have 4 and 17 occurrences respectively, which is significantly less than Antarctica. Indeed, Greenland and Namibia have extreme outliers in terms of mass. They can be filtered out by adjusting the mass range selector to cover from 0 up to the 99th percentile in terms of mass. In doing so, other countries take the lead, such as Colombia, Belarus, and Turkmenistan.

The average mass of the meteorites that landed in these countries and regions can be found by passing the mouse over them on the choropleth maps. The ability to select time ranges on the line chart would be ideal; however, due to the constraints related to this activity, implementing this was not feasible in a timely manner, and could be a pertinent future improvement to this dashboard.

How big is the mean mass of the predominant meteorite class and in which region they tend to occur the most?
This question can be answered by looking at the bar plot at the bottom right corner of the dashboard. It shows how many meteorites of each class are described in this data set. By clicking on one or many bars, the visualizations are dynamically filtered to consider only the selected classes.

Using this bar plot, one can see that the ten most frequent classes are:

L6;
H5;
L5;
H6;
H4;
LL5;
LL6;
L4;
H4/5; and
CM2.
Similarly to what was seen in the choropleth maps, analysing the mean mass of the meteorite landings of any given class is as simple as passing the mouse through the respective bar.

Are there any geographic or temporal differences between the meteorite classes that fell on Earth?
Some differences can be noted between some classes, although most of them share a somewhat similar distribution in which Antarctica has the most number of occurrences. One example of comparison between classes with distinct distributions is L4 and C03. L4 meteorites registered most incidents around 1980 with more than 900 occurrences, most of which around Antarctica. CO3, on the other hand, affected Libya the most, followed by Antarctica, and its occurrences peaked around 2010.

Looking in hindsight, it seems that the global filtering of outliers performed outside this JavaScript application did not contemplate the filtered maps, thus hindering the discovery of more subtle differences. A better alternative would be to automatically perform outlier filtering using a Z-Score-based approach in the JavaScript application itself and automatically. This serves as meaningful feedback for any prospective endeavors involving visualization with d3.js.

Which is the predominant class of meteorites of type Fell, when did they occur the most and where they can be most frequently observed?
This question is interesting because the Fell class (i.e., those incidents that were observed as they happened instead of just finding the meteorite afterwards) are a small class, amounting to just 1,107 instances. The Found class, conversely, contains 44,609 entries.

In the produced dashboard, the types of meteorite incidents can be filtered by using the checkboxes. By changing their state, all visualizations are dynamically updated accordingly. By selecting only Fell incidents, one can see how the distributions are significantly different. To begin with, no more than 20 Fell observations were registered in the same year. Moreover, no Fell incidents were registered in Antarctica, which means that all meteorite incidents there were registered post-impact. Now, the leading countries in terms of this type of landings are the United States, India, China, and Russia.

Lastly, the line plot allows the inspection of when this type of incident happened the most, and the bar plot and mass slider allow additional filtering to see how each meteorite class is distributed in terms of mass, geographical location, and time.

How the Fell and Found meteorites differ in geographic and temporal terms?
The previous question helps to answer this one. As previously mentioned, this data set is very unbalanced in terms of Fell/Found occurrences. In addition to this fact, the geographical distribution of these types of meteorite landings significantly differ.

Overall, only the distribution of Fell and Found incidents in terms of time can be considered similar. The numbers and variations are naturally higher on the predominant class, but all of began to be more frequently registered around the same time mentioned before (from year 1970 onwards).
