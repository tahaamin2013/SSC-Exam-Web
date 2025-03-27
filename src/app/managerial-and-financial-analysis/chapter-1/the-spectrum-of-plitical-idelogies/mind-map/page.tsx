import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
            @startmindmap
            <style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor gold
  }
  :depth(3) {
    BackgroundColor pink
  }
  :depth(4) {
    BackgroundColor gray
  }
  .radioisotopes {
    BackgroundColor yellow
  }
  .isotopes {
    BackgroundColor cyan
  }
  .unstable {
    BackgroundColor lightPink
  }
  .examples {
    BackgroundColor lightGreen
  }
}
</style>

* The Spectrum of Political Ideologies
** Communism (Extreme Left | Radicals | Dictatorial)
*** All means of production must be in the hands of the state.
*** No private property.
*** Distribution of state earnings on the basis of needs.
*** Production based on needs of people.
*** Egalitarian, classless society.
*** No individual freedom in consumption choices.
*** Comprehensive political & economic system.
*** No organized religion, but individual religion is tolerated.
*** Change through any means, including violence.
*** Key Figures & Examples
**** Leaders: Stalin, Lenin
**** Country: Soviet Union

** Liberals (Left Wing, Democratic Socialism)
*** Most means of production in state hands, some exceptions.
*** Private property allowed.
*** Recognizes distinctions based on ability & contribution.
*** Distribution based on individual input.
*** Challenges the status quo.
*** State responsible for people, regulates business.
*** Religion allowed.
*** Favors peaceful change.
*** Everyone is equal before the law.
*** Implementation through social change.
*** Key Characteristics: Collectivism, Economic Equality, Social Service, Nationalization.
*** Key Figures & Examples
**** Movement: Fabian Socialism
**** Country: Sweden

** Centre (Moderates | Democracy)
*** Wants change but respects tradition.
*** State as a guardian for all.
*** Recognizes individual freedom.
*** Full religious freedom.
*** Private property allowed.
*** Balance of private and public means of production.
*** Supports slow social change.
*** Believes in international cooperation with national interests.
*** Key Figures & Examples
**** Leaders: J.S. Mill, Keynes, F.D. Roosevelt
**** Country: Canada

** Conservatism (Right Wing, Laissez-Faire, Democratic Capitalism)
*** Free market, open competition.
*** Elitist and oligarchic rule.
*** Law favors the elite.
*** Maximum private property, minimal state ownership.
*** Maintains the status quo.
*** National goals over international cooperation.
*** Individual liberties with exceptions.
*** Religious practice fully allowed.
*** Large corporations have power.
*** Tendency for suppression by the majority.
*** Power politics is key.
*** Key Characteristics: Individualism, Private Ownership, Self-interest, Open Competition, Privatization, Limited Protection from System.
*** Key Figures & Examples
**** Leaders: Friedman, Hayek, Reagan, Thatcher
**** Country: United States

** Fascist Capitalism (Extreme Right, Dictatorial, Reactionaries)
*** No individual freedom.
*** Authoritarian rule.
*** Private property allowed only by ruling regime.
*** Extreme inequalities.
*** National interest protection at all costs.
*** Change through any means, including violence.
*** No dissent allowed.
*** Key Figures & Examples
**** Leaders: Hitler, Mussolini, Franco
**** Countries: Nazi Germany, Fascist Italy, Spain
@endmindmap
            `}
        />
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
                <tr className="bg-gray-800 text-white">
                    <th className="p-3 border">Ideology</th>
                    <th className="p-3 border">Economic Policy</th>
                    <th className="p-3 border">Social Structure</th>
                    <th className="p-3 border">Religious Stance</th>
                    <th className="p-3 border">Key Figures & Examples</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-100">
                    <td className="p-3 border font-bold">Communism (Extreme Left)</td>
                    <td className="p-3 border">All production controlled by the state, no private property.</td>
                    <td className="p-3 border">Classless society, equality in material wealth.</td>
                    <td className="p-3 border">No organized religion; individual beliefs allowed.</td>
                    <td className="p-3 border">Leaders: Stalin, Lenin | Country: Soviet Union</td>
                </tr>
                <tr className="bg-white">
                    <td className="p-3 border font-bold">Liberals (Left Wing)</td>
                    <td className="p-3 border">State controls key industries, private property allowed.</td>
                    <td className="p-3 border">Recognizes social distinctions, promotes regulation for social welfare.</td>
                    <td className="p-3 border">Religion is allowed.</td>
                    <td className="p-3 border">Movement: Fabian Socialism | Country: Sweden</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-3 border font-bold">Centre Moderates</td>
                    <td className="p-3 border">Balanced private and public ownership.</td>
                    <td className="p-3 border">Supports slow social change, respects traditions.</td>
                    <td className="p-3 border">Full religious freedom.</td>
                    <td className="p-3 border">Leaders: J.S. Mill, Keynes, Roosevelt | Country: Canada</td>
                </tr>
                <tr className="bg-white">
                    <td className="p-3 border font-bold">Conservatism (Right Wing)</td>
                    <td className="p-3 border">Free market, private ownership, minimal state involvement.</td>
                    <td className="p-3 border">Law favors the elite, prioritizes national interest.</td>
                    <td className="p-3 border">Religious practices fully allowed.</td>
                    <td className="p-3 border">Leaders: Friedman, Hayek, Reagan, Thatcher | Country: United States</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-3 border font-bold">Fascist Capitalism (Extreme Right)</td>
                    <td className="p-3 border">Private property allowed under state control, extreme inequalities.</td>
                    <td className="p-3 border">Authoritarian rule, no individual freedom.</td>
                    <td className="p-3 border">No dissenting opinions allowed.</td>
                    <td className="p-3 border">Leaders: Hitler, Mussolini, Franco | Countries: Nazi Germany, Fascist Italy, Spain</td>
                </tr>
            </tbody>
        </table>
    </div>
      </section>
    </div>
  );
};

export default MagneticMindmap;